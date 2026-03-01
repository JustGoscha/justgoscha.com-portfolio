var axios = require("axios");
var toJSON = require("xml2js").parseString;

var FEEDS = {
  inspiredAnimator: {
    name: "The Inspired Animator",
    url: "https://animator.substack.com/feed",
    homeUrl: "https://animator.substack.com",
    type: "substack",
  },
  painMeds: {
    name: "Pain Meds",
    url: "https://painmeds.substack.com/feed",
    homeUrl: "https://painmeds.substack.com",
    type: "substack",
  },
  zenMemo: {
    name: "ZenMemo",
    url: "https://zenmemo.substack.com/feed",
    homeUrl: "https://zenmemo.substack.com",
    type: "substack",
  },
  technograf: {
    name: "Technograf",
    url: "https://technograf.substack.com/feed",
    homeUrl: "https://technograf.substack.com",
    type: "substack",
  },
  oldBlog: {
    name: "justGoscha's Realm",
    url: "https://feeds.feedburner.com/justgoscha",
    homeUrl: "http://justgoscha.github.io",
    type: "blog",
  },
  youtube: {
    name: "YouTube",
    url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCF112Y8jC-g1QldPeoin-kA",
    homeUrl: "https://www.youtube.com/channel/UCF112Y8jC-g1QldPeoin-kA",
    type: "youtube",
  },
};

var TIMEOUT = 5000;

function fetchFeed(url) {
  return axios.get(url, { timeout: TIMEOUT }).then(function (response) {
    return new Promise(function (resolve, reject) {
      toJSON(response.data, function (err, result) {
        if (err) reject(err);
        else resolve(result);
      });
    });
  });
}

function parseRSS(xml) {
  if (!xml || !xml.rss || !xml.rss.channel || !xml.rss.channel[0].item) {
    return [];
  }
  return xml.rss.channel[0].item.map(function (item) {
    var desc = item.description ? item.description[0] : "";
    // Strip HTML tags for plain text excerpt
    var plainDesc = desc.replace(/<[^>]+>/g, "").trim();
    return {
      title: item.title ? item.title[0] : "",
      link: item.link ? item.link[0] : "",
      pubDate: item.pubDate ? item.pubDate[0] : "",
      description: plainDesc.substring(0, 200),
    };
  });
}

function parseAtom(xml) {
  if (!xml || !xml.feed || !xml.feed.entry) {
    return [];
  }
  return xml.feed.entry.map(function (entry) {
    var link = "";
    var videoId = "";

    // YouTube Atom feeds use yt:videoId
    if (entry["yt:videoId"]) {
      videoId = entry["yt:videoId"][0];
      link = "https://www.youtube.com/watch?v=" + videoId;
    } else if (entry.link) {
      link = entry.link[0].$.href || "";
    }

    // Check if it's a Short by looking at the media group
    var isShort = false;
    if (entry["media:group"] && entry["media:group"][0]) {
      var mediaDesc = entry["media:group"][0]["media:description"]
        ? entry["media:group"][0]["media:description"][0]
        : "";
      // Shorts are typically very short descriptions or tagged
    }

    var thumbnail = "";
    if (videoId) {
      thumbnail = "https://i.ytimg.com/vi/" + videoId + "/mqdefault.jpg";
    }

    return {
      title: entry.title ? entry.title[0] : "",
      link: link,
      videoId: videoId,
      pubDate: entry.published ? entry.published[0] : "",
      thumbnail: thumbnail,
      isShort: isShort,
    };
  });
}

module.exports = async function () {
  var results = await Promise.allSettled([
    fetchFeed(FEEDS.inspiredAnimator.url),
    fetchFeed(FEEDS.painMeds.url),
    fetchFeed(FEEDS.zenMemo.url),
    fetchFeed(FEEDS.technograf.url),
    fetchFeed(FEEDS.oldBlog.url),
    fetchFeed(FEEDS.youtube.url),
  ]);

  function safeGet(index, parser) {
    if (results[index].status === "fulfilled") {
      return parser(results[index].value);
    }
    console.warn("Could not fetch feed: " + Object.values(FEEDS)[index].name);
    return [];
  }

  var youtubePosts = safeGet(5, parseAtom);

  // Detect Shorts by video duration heuristic: title patterns or aspect ratio
  // Since RSS doesn't reliably indicate Shorts, we'll try fetching oembed for a few
  // For now, mark videos with #shorts in title as shorts
  youtubePosts.forEach(function (post) {
    if (post.title.toLowerCase().includes("#short")) {
      post.isShort = true;
    }
  });

  var shorts = youtubePosts.filter(function (p) { return p.isShort; });
  var videos = youtubePosts.filter(function (p) { return !p.isShort; });

  return {
    substacks: [
      {
        name: FEEDS.inspiredAnimator.name,
        homeUrl: FEEDS.inspiredAnimator.homeUrl,
        posts: safeGet(0, parseRSS),
      },
      {
        name: FEEDS.painMeds.name,
        homeUrl: FEEDS.painMeds.homeUrl,
        posts: safeGet(1, parseRSS),
      },
      {
        name: FEEDS.zenMemo.name,
        homeUrl: FEEDS.zenMemo.homeUrl,
        posts: safeGet(2, parseRSS),
      },
      {
        name: FEEDS.technograf.name,
        homeUrl: FEEDS.technograf.homeUrl,
        posts: safeGet(3, parseRSS),
      },
    ],
    oldBlog: {
      name: FEEDS.oldBlog.name,
      homeUrl: FEEDS.oldBlog.homeUrl,
      posts: safeGet(4, parseRSS),
    },
    youtube: {
      name: FEEDS.youtube.name,
      homeUrl: FEEDS.youtube.homeUrl,
      shorts: shorts,
      videos: videos,
    },
  };
};
