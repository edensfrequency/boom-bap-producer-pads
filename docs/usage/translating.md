[&larr; Back to the usage guides](README.md)
<hr>

# Languages, and translating the plugin

The plugin's text can be shown in another language. It ships in English;
a language is a small text file that anyone can write, and the plugin
picks it up by itself.

## Choosing a language

Press **Language** in the banner (top right, next to Light / Dark) and pick
one. The plugin uses it the next time you open its window: in the
Standalone, close it and open it again; in a DAW, close the plugin window
and open it again. Your choice is remembered.

The list shows **English**, **Pseudo** (see below) and every language file
in your Languages folder.

## Translating it into your language

1. Press **Language**, then **Make a template for translators**. A file
   called `template.txt` appears in your Languages folder
   (`%APPDATA%\Boom Bap Producer Pads\Languages`), and the folder opens.
2. Make a copy and name it after your language, for example
   `Francais.txt` (any name ending in `.txt`).
3. Open it in a text editor (Notepad is fine). Change the first line,
   `language: English (template)`, to your language's name, for example
   `language: Francais`. That's the name the Language menu shows.
4. Each line looks like this:

   ```text
   "Load..." = "Load..."
   ```

   Replace the text on the **right** of the `=` with your translation, and
   leave the left side exactly as it is:

   ```text
   "Load..." = "Charger..."
   ```

   A line you don't change stays in English, so you can translate a bit at
   a time. Inside the quotes, write `\"` for a quote mark and `\n` for a
   new line, as the template does.
5. Save the file as **UTF-8** (Notepad: *Save as* > *Encoding: UTF-8*), so
   accented letters come out right.
6. Choose your language from the **Language** menu and reopen the plugin
   window.

Some text is still English whatever the language: words built from pieces
(like "Cue 3 at 12.50s") and a few messages haven't been made translatable
yet. That's the next step of this work.

## The Pseudo language

**Pseudo** is for testing, not reading: every translatable piece of text
shows up in brackets and about a third longer, like `[Load...~~~]`. Text
that shows *without* brackets isn't translatable yet, and text that gets
cut off shows where a longer translation won't fit.
