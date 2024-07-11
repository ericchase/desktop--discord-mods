# Add Mods

- Find `index.js` under:

```
C:\Users\[USERNAME]\AppData\Local\Discord\app-[LATEST_VERSION]\modules\discord_voice-1\discord_voice
```

- Append the contents of `mod.js` to the end of `index.js`. Refresh discord client.

**Note**: If `index.js` is missing, discord may have failed to update properly. Try uninstalling and installing Discord again.

# Enable Developer Tools

- Find `settings.json` under:

```
C:\Users\[USERNAME]\AppData\Roaming\discord
```

- Add `"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true` to the object so that it looks something like this:

```json
{
  "IS_MAXIMIZED": true,
  "IS_MINIMIZED": false,
  "WINDOW_BOUNDS": {
    "x": -1450,
    "y": 177,
    "width": 1280,
    "height": 720
  },
  "chromiumSwitches": {},
  "DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true
}
```

- Make sure to add a `,` (comma) to the end of the previous line.

**Note**: Don't worry about the other lines, those are specific to each person.
