---
title: 'Blazing Fast Window Navigation on MacOS'
description: 'Stop wasting time with Mission Control and weird triple swipes. With just a few configuration changes, you could be navigating exactly where you want with just a single keybind.'
publishDate: '2023-06-27'
slug: 'blazing-fast-window-navigation-on-macos'
---

If your workflow looks like this, you might think you're a magician at navigating around on MacOS:

1. You move your hand from the keyboard to the trackpad
2. You triple swipe up on the trackpad to open [Mission Control](https://support.apple.com/en-us/HT204100)
3. You drag your fingers across the trackpad to select the application or desktop you wish to open

The beautiful MacOS animations and the majestic triple swipe makes everything feel so fast.

**But it's not fast. You're not a magician. You're creating friction and wasting time.**

## No More Triple Swiping

What's wrong with triple swiping?

The core issue of triple swiping is that you **have to constantly move your hand between the
keyboard and trackpad**. It might not be the end of the world, but it will:

- Create unnecessary friction in your workflow
- Amplify inefficiency over time (it all adds up!)
- Waste a bit of energy

> But Sean, I don't really need to be fast or inefficient! I spend most of my time thinking and brainstorming
> rather than executing.
>
> While this is true, speed and efficiency is still important. The point of speed and efficiency is that
> you'll be able to move fast when you know what to do and aren't brainstorming. You'll be able to
> execute faster, get feedback earlier, and have more time to spend thinking.

We can do better.

## Playing the Keyboard

At this point, the solution is probably clear. **Let's configure MacOS so we can use
blazing fast keybinds to navigate.**

> This is a good entry point for leveraging keybinds rather than the trackpad or mouse. Careful now,
> it's a slippery slope. Next thing you know, you'll drop VS Code for Neovim.

### Step 1: Using Keybinds to Switch Desktops

First, let's setup keybinds to rapidly switch between desktops:

1. Open "System Settings"
2. Select "Keyboard"
3. Click the "Keyboard Shortcuts..." button
4. Select "Mission Control"
5. Open the "Mission Control" dropdown
6. Enable and bind each "Switch to Desktop X" shortcut. I prefer to bind Desktop 1
   to Ctrl + 1, Desktop 2 to Ctrl + 2, etc

If you don't see as many "Switch to Desktop X" options as you would like, you may need to:

1. Exit "System Settings"
2. Create a bunch of empty desktops
3. Try again from the beginning

Now, we can quickly switch to any desktop with a single keybind!

<img 
  src="/blog/blazing-fast-window-navigation-in-macos/ctrl-number-navigation.png" 
  alt="Example of how the Ctrl + \<number> keybinds work." 
  style="display: flex; margin: 2rem auto; width: 100%; max-width: 400px;"/>

> Remember, this is for switching between desktops. Unfortunately, this won't work if you're
> full-screening all your applications. We'll discuss a solution for that in the next section!

In fact, switching desktops might feel so fast that it literally hurts your head. In this case, I
recommend turning on the [reduce motion](https://support.apple.com/guide/mac-help/reduce-screen-motion-mchlc03f57a1/mac)
option:

1. Open "System Settings"
2. Select "Accessibility"
3. Select "Display"
4. Toggle on the "Reduce motion" option

Much better!

> But Sean, how do I know which desktop has the application I want to use? I should triple swipe into
> Mission Control and see which desktop has the window I want to use right?
>
> I've found conventions to be useful here! For example, I keep the same ordering at all times:
>
> 1. Terminal
> 2. Browser
> 3. Slack
> 4. Email
> 5. Etc.
>
> This convention ensures that I always know which Ctrl + \<number> keybind I need to press in order to
> get where I need to be.
>
> However, this convention fails when I'm using an app that I don't use often. We'll discuss a solution
> to this issue in Step 3!

### Step 2: Managing Windows with Yabai

As previously mentioned, the **keybinds created in the section above will only work for switching between desktops**.
They won't work for switching between full-screen applications.

The solution here is simple: **Don't full-screen any of your applications!**

This solution is fine on it's own, but I like to use another tool to manage windows on
my various desktops: [Yabai](https://github.com/koekeishiya/yabai)!

[Yabai](https://github.com/koekeishiya/yabai) is a window manager for MacOS. It's great for:

- Moving between windows
- Re-arranging windows
- Snapping windows to positions
- And other window, desktop, and space operations!

There are some features that require you to disable "System Integrity" on your Mac. However, I've found
that **Yabai works just fine for many use cases without disabling System Integrity**.

In terms of window management, I mostly use Yabai for snapping windows onto a desktop:

<img 
  src="/blog/blazing-fast-window-navigation-in-macos/yabai-start-service.png" 
  alt="Demonstration of Yabai snapping windows into place." 
  style="display: flex; margin: 2rem auto; width: 100%; max-width: 1000px;"/>

> You might want to hide the Menu Bar and Dock unless hovered to get more screen real-estate:
> 
> 1. Open "System Settings" 
> 2. Select "Desktop & Dock"
> 3. Toggle on "Automatically show and hide the Dock"
> 4. Set "Automatically hide and show the menu bar" to "Always"
>

**Yabai is also great in combination with [SKHD](https://github.com/koekeishiya/skhd) (a MacOS keybinding tool)** so that you can add custom
keybinds for any advanced navigation use cases.

Overall, check out my configurations below for all the ways that I currently use Yabai + SKHD!

- Yabai Config: [GitHub sdodson99/.dotfiles/.yabairc](https://github.com/sdodson99/.dotfiles/blob/master/.yabairc)
- SKHD Config: [GitHub sdodson99/.dotfiles/.skhdrc](https://github.com/sdodson99/.dotfiles/blob/master/.skhdrc)

### Step 3: Opening and Navigating to Applications with SpaceLauncher

Lastly, the Ctrl + \<number> desktop conventions won't work well for applications that you don't 
use often. In this situation, you likely **won't remember which Ctrl + \<number> 
desktop has the application** you want to use.

In this scenario, I leverage another great tool called SpaceLauncher! [SpaceLauncher](https://spacelauncherapp.com/)
allows you to open or navigate to an application via a keybind. 

<img 
  src="/blog/blazing-fast-window-navigation-in-macos/space-launcher-safari.png" 
  alt="Example of how Space Launcher keybinds work." 
  style="display: flex; margin: 2rem auto; width: 100%; max-width: 600px;"/>

For example, I don't use Safari often unless I am doing some sort of cross-browser testing. That said, Safari
doesn't fit into my Ctrl + \<number> desktop convention. However, I've registered a \<Space> + S keybind in
SpaceLauncher so that I can get to Safari without having to browse through my desktops!

> So Sean, why don't you just use SpaceLauncher for all your window navigation? It seems so easy!
>
> The only drawback with SpaceLauncher is that you have to hold down \<Space> for a bit to begin the
> keybind. This can be tedious at times, and it's slower than just slamming Ctrl + \<number> whenever I
> need to. Regardless, SpaceLauncher is still fantastic for navigating to less frequently used applications!

## Stick To It

Honestly, you might be navigating slower than usual at first. This is okay - it might take some time to
adjust. **Keep practicing, avoid falling back to old habits, and soon enough you'll be more efficient than
you'd ever have been with triple swipes.**

In the end, you'll be a wizard at navigating windows!

> This is just one piece of the puzzle. There are various other tools to help speed up your
> workflow (Neovim, Tmux, Vimium, etc.). Perhaps we'll discuss those another time!
> 
> Interested in my configurations? Check out my dotfiles! [GitHub sdodson99/.dotfiles](https://github.com/sdodson99/.dotfiles)

