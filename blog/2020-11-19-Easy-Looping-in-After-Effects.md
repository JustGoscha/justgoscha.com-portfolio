# Easy Looping in After Effects

A faster way to loop footage, PNG sequences and imported animations in After Effects.

If you are like me doing a lot of your animations outside of Adobe After Effects [AE] you might be familiar with the following problem — perfectly looping footage without blank frames or skipped frames.

<!-- Shortcut to interpret footage in your favorite framerate -->

## The Usual Way to Loop

The usual way is the following:

1. Drop footage into the timeline
2. Select your footage and "Enable Time Remapping":
   a. Either by pressing **CTRL+ALT+T** (Mac: **CMD+ALT+T**)
   or
   b. **Right Click > Time > Enable Time Remapping**
3. Then **ALT+Left Click** on the stopwatch to open expressions of Time Remap and type in there `loopOut()`.

Now this enables already looping. And now you can stretch out that footage in your timeline and be happy.

**BUT WAIT!!!**

A very attentive fellow like you will immediately notice when playing — **it skips the first frame!**

Well, this is just an insult to your work, since you spent so much time drawing that first frame! Unacceptable!

So you go back to work and to fix it you are going through these steps:

4. Move the playhead to 1 frame before the last keyframe. And create a keyframe there. By pressing the Diamond icon on the very left of the layer.
5. Copy the first keyframe on the timeline (Click on diamond on first keyframe, then CTRL+C / CMD+C)
6. Paste keyframe on the last keyframe (Click on diamond of last keyframe, CTRL+V / CMD + V)

Now you play it again, and proudly see it finally working! It's looping perfectly!

Before you realize in horror, you have to do it for the 10 other imported animations you have all over again. Each time you get more efficient... but it still takes you 30 seconds per animation every time. You think of all the times you have to do this work now and in your future. All the mindless work, that will keep you away, from your loved ones!

But do not despair! **There is a better way.**

And here is how...

## The Faster Way to Loop

I had the same problem, over and over again. That's why I sat down one day and automated that task with a script.

I call it **_EasyLoop_**. And it allows you to replace this tedious process with just 2 clicks. Or 1 click if you assign a shortcut (I show you how below.)

The new process looks like this:

1. Select all the layers / footage you want to loop.
2. Go to **File > Scripts > EasyLoop**

And done... all you need to do now is expand the clip length to whatever you want and it's perfectly looped. And it supports many compositions / layers at the same time. So what could have taken you multiple minutes before, now just takes a couple of seconds.

## Assign a Shortcut for Looping (even faster)

Now for the true masters of the craft, let's do it with a shortcut.

1. Go to **Edit > Keyboard Shortcuts**
2. Check out which shortcuts are still free on your setup, by just pressing key combinations. Find a free one you like. CTRL+ALT+L is already taken for me, so I will go with CTRL+ALT+8 (because 8 is like a standing loop symbol. #SymbolicShortcutsFTW)

3. Type in `EasyLoop` into the search.
4. Double click into the shortcut column next to EasyLoop.jsx
5. Press your preferred key combination (e.g. CTRL+ALT+8)

Now this key combination should show up right next to EasyLoop.jsx in the shortcut column. And you're good to go!

I am happy to have been able to help you reclaim precious seconds of your life!

Consider leaving a tip, some claps and share it to other Motion Designers / Animators if this helps you out!

You can get this script here!

Consider
