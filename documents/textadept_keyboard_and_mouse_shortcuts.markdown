---
layout: page
title: Textadept Keyboard/Mouse Shortcuts
---

**Last update at April 9th, 2010 (revision 3)**

Here's a list of key shortcuts for [Textadept][] **2.2 Beta**. Mac OSX
keyboard/mouse shortcuts are missing, because I have no Mac.

 [Textadept]: http://code.google.com/p/textadept/


## Keyboard/Mouse Shortcuts

 - **Ctrl** = Control key
 - **Shift** = Shift key
 - **Alt** = Alt key
 - **Tab** = Tab key
 - **Space** = Spacebar
 - **Return** = Return/Enter key
 - **ScrollUp** = Scroll up with mousewheel
 - **ScrollDown** = Scroll Down with mousewheel


<h3 id="h-file">File <a class="h-link" href="#h-file">¶</a></h3>

<table>
    <thead>
        <tr>
            <th>Linux/Windows</th>
            <th>Mac OSX</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ctrl+n</td>
            <td></td>
            <td>New buffer</td>
        </tr>
        <tr>
            <td>Ctrl+o</td>
            <td></td>
            <td>Open file</td>
        </tr>
        <tr>
            <td>Ctrl+s</td>
            <td></td>
            <td>Save</td>
        </tr>
        <tr>
            <td>Ctrl+S</td>
            <td></td>
            <td>Save as</td>
        </tr>
        <tr>
            <td>Ctrl+w</td>
            <td></td>
            <td>Close buffer</td>
        </tr>
        <tr>
            <td>Ctrl+W</td>
            <td></td>
            <td>Close all buffers</td>
        </tr>
        <tr>
            <td>Alt+q</td>
            <td></td>
            <td>Quit</td>
        </tr>
    </tbody>
</table>


<h3 id="h-edit">Edit <a class="h-link" href="#h-edit">¶</a></h3>

<table>
    <thead>
        <tr>
            <th>Linux/Windows</th>
            <th>Mac OSX</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ctrl+z</td>
            <td></td>
            <td>Undo last action</td>
        </tr>
        <tr>
            <td>Ctrl+y</td>
            <td></td>
            <td>Redo last action</td>
        </tr>
        <tr>
            <td>Ctrl+x</td>
            <td></td>
            <td>Cut current selection</td>
        </tr>
        <tr>
            <td>Ctrl+c</td>
            <td></td>
            <td>Copy current selection</td>
        </tr>
        <tr>
            <td>Ctrl+v</td>
            <td></td>
            <td>Paste cut/copied selection fro memory</td>
        </tr>
        <tr>
            <td>Del</td>
            <td></td>
            <td>Delete current select or the character after the cursor</td>
        </tr>
        <tr>
            <td>Ctrl+a</td>
            <td></td>
            <td>Select all</td>
        </tr>
        <tr>
            <td>Ctrl+e</td>
            <td></td>
            <td>Match brace</td>
        </tr>
        <tr>
            <td>Ctrl+E</td>
            <td></td>
            <td>Select everything between the matches braces, including the braces</td>
        </tr>
        <tr>
            <td>Ctrl+Return</td>
            <td></td>
            <td>Autocomplete</td>
        </tr>
        <tr>
            <td>Ctrl+q</td>
            <td></td>
            <td><strong>Block comment (only works in a Lua file)</strong></td>
        </tr>
    </tbody>
</table>


<h3 id="h-enclose-in">Enclose In ... <a class="h-link" href="#h-enclose-in">¶</a></h3>

<table>
    <thead>
        <tr>
            <th>Linux/Windows</th>
            <th>Mac OSX</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alt+c → t</td>
            <td></td>
            <td>Enclose in &lt;&gt; (transforms <code>tag</code> into <code>&lt;tag&gt;&lt;/tag&gt;</code>)</td>
        </tr>
        <tr>
            <td>Alt+c → T</td>
            <td></td>
            <td>Enclose in &lt; /&gt; (transforms <code>tag</code> into <code>&lt;tag /&gt;</code>)</td>
        </tr>
        <tr>
            <td>Alt+c → &quot;</td>
            <td></td>
            <td>Enclose in &quot; (transforms <code>text</code> into <code>&quot;text&quot;</code>)</td>
        </tr>
        <tr>
            <td>Alt+c → &apos;</td>
            <td></td>
            <td>Enclose in &apos; (transforms <code>text</code> into <code>&apos;text&apos;</code>)</td>
        </tr>
        <tr>
            <td>Alt+c → (</td>
            <td></td>
            <td>Enclose in ( and ) (transforms <code>text</code> into <code>(text)</code>)</td>
        </tr>
        <tr>
            <td>Alt+c → [</td>
            <td></td>
            <td>Enclose in [ and ] (transforms <code>text</code> into <code>[text]</code>)</td>
        </tr>
        <tr>
            <td>Alt+c → {</td>
            <td></td>
            <td>Enclose in { and } (transforms <code>text</code> into <code>{text}</code>)</td>
        </tr>
        <tr>
            <td>Alt+c → Space</td>
            <td></td>
            <td>Enclose in spaces</td>
        </tr>
    </tbody>
</table>


<h3 id="h-select-in">Select In ... <a class="h-link" href="#h-select-in">¶</a></h3>

The *Select In* shortcuts only work when the menubar is disabled, because Alt+s
activates the *Search* menu in the menubar.

<table>
    <thead>
        <tr>
            <th>Linux/Windows</th>
            <th>Mac OSX</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alt+s → t</td>
            <td></td>
            <td>Select tag contents and not the tags themselve</td>
        </tr>
        <tr>
            <td>Alt+s → &quot;</td>
            <td></td>
            <td>Select text between two quotes &quot;&quot;</td>
        </tr>
        <tr>
            <td>Alt+s → &apos;</td>
            <td></td>
            <td>Select text between two apostrophes &apos;&apos;</td>
        </tr>
        <tr>
            <td>Alt+s → (</td>
            <td></td>
            <td>Select text between two parentheses ()</td>
        </tr>
        <tr>
            <td>Alt+s → [</td>
            <td></td>
            <td>Select text between two brackets []</td>
        </tr>
        <tr>
            <td>Alt+s → {</td>
            <td></td>
            <td>Select text between two braces {}</td>
        </tr>
        <tr>
            <td>Alt+s → w</td>
            <td></td>
            <td>Select current word</td>
        </tr>
        <tr>
            <td>Alt+s → l</td>
            <td></td>
            <td>Select current line</td>
        </tr>
        <tr>
            <td>Alt+s → p</td>
            <td></td>
            <td>Select current paragraph</td>
        </tr>
        <tr>
            <td>Alt+s → b</td>
            <td></td>
            <td>Select current block</td>
        </tr>
        <tr>
            <td>Alt+s → s</td>
            <td></td>
            <td>Select current scope</td>
        </tr>
        <tr>
            <td>Alt+s → g</td>
            <td></td>
            <td>Grow selection</td>
        </tr>
    </tbody>
</table>


<h3 id="h-search">Search <a class="h-link" href="#h-search">¶</a></h3>

<table>
    <thead>
        <tr>
            <th>Linux/Windows</th>
            <th>Mac OSX</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ctrl+f</td>
            <td></td>
            <td>Find/Replace (focus find/replace dialog)</td>
        </tr>
        <tr>
            <td>F3</td>
            <td></td>
            <td>Find next occurrence</td>
        </tr>
        <tr>
            <td>Alt+n</td>
            <td></td>
            <td>Find next occurrence (when find/replace dialog is focused)</td>
        </tr>
        <tr>
            <td>Alt+p</td>
            <td></td>
            <td>Find previous occurrence (when find/replace dialog us focused)</td>
        </tr>
        <tr>
            <td>Alt+r</td>
            <td></td>
            <td>Replace (when find/replace dialog us focused)</td>
        </tr>
        <tr>
            <td>Ctrl+F</td>
            <td></td>
            <td>Search while typing (find incremental)</td>
        </tr>
        <tr>
            <td>Alt+i</td>
            <td></td>
            <td>Find in files (when find/replace dialog us focused)</td>
        </tr>
        <tr>
            <td>Ctrl+g</td>
            <td></td>
            <td>Go to line</td>
        </tr>
    </tbody>
</table>


<h3 id="h-tools">Tools <a class="h-link" href="#h-tools">¶</a></h3>

<table>
    <thead>
        <tr>
            <th>Linux/Windows</th>
            <th>Mac OSX</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>F2</td>
            <td></td>
            <td>Focus commandline entry</td>
        </tr>
    </tbody>
</table>

<h3 id="h-run">Run <a class="h-link" href="#h-run">¶</a></h3>

<table>
    <thead>
        <tr>
            <th>Linux/Windows</th>
            <th>Mac OSX</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ctrl+r</td>
            <td></td>
            <td>Run current file</td>
        </tr>
        <tr>
            <td>Ctrl+R</td>
            <td></td>
            <td>Compile</td>
        </tr>
    </tbody>
</table>


<h3 id="h-snippets">Snippets <a class="h-link" href="#h-snippets">¶</a></h3>

<table>
    <thead>
        <tr>
            <th>Linux/Windows</th>
            <th>Mac OSX</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>&lt;text&gt; → Tab</td>
            <td></td>
            <td>Insert snippet (when available)</td>
        </tr>
        <tr>
            <td>Shift+Tab</td>
            <td></td>
            <td>Cancel the current snippert insertion (after snippet has been inserted)</td>
        </tr>
        <tr>
            <td>Ctrl+Alt+i</td>
            <td></td>
            <td>Cancel current snippet insertion (after snippet has been inserted)</td>
        </tr>
        <tr>
            <td>Ctrl+Alt+I</td>
            <td></td>
            <td>Lists available snippets in an autocompletion list</td>
        </tr>
        <tr>
            <td>Alt+i</td>
            <td></td>
            <td>Shows the style at the current caret position</td>
        </tr>
    </tbody>
</table>


<h3 id="h-buffers">Buffers <a class="h-link" href="#h-buffers">¶</a></h3>

<table>
    <thead>
        <tr>
            <th>Linux/Windows</th>
            <th>Mac OSX</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ctrl+b</td>
            <td></td>
            <td>Show <em>Switch Buffer</em> dialog</td>
        </tr>
        <tr>
            <td>Ctrl+Tab</td>
            <td></td>
            <td>Go to the next buffer</td>
        </tr>
        <tr>
            <td>Ctrl+Shift+Tab</td>
            <td></td>
            <td>Go to the previous buffer</td>
        </tr>
        <tr>
            <td>Ctrl+t → v+e</td>
            <td></td>
            <td>View/Hide EOL</td>
        </tr>
        <tr>
            <td>Ctrl+t → v+w</td>
            <td></td>
            <td>Toggle wrap mode</td>
        </tr>
        <tr>
            <td>Ctrl+t → v+i</td>
            <td></td>
            <td>View/Hide indention guides</td>
        </tr>
        <tr>
            <td>Ctrl+t → v+Tab</td>
            <td></td>
            <td>Toggle between tabs or spaces for a tab</td>
        </tr>
        <tr>
            <td>Ctrl+t → v+Space</td>
            <td></td>
            <td>View/Hide whitespace characters</td>
        </tr>
        <tr>
            <td>Ctrl+l</td>
            <td></td>
            <td>SHow <em>Select Lexer</em> dialog</td>
        </tr>
        <tr>
            <td>F5</td>
            <td></td>
            <td>Refresh syntax highlighting</td>
        </tr>
    </tbody>
</table>


<h3 id="h-views">Views <a class="h-link" href="#h-views">¶</a></h3>

<table>
    <thead>
        <tr>
            <th>Linux/Windows</th>
            <th>Mac OSX</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ctrl+Alt+v → n</td>
            <td></td>
            <td>Next view</td>
        </tr>
        <tr>
            <td>Ctrl+Alt+v → p</td>
            <td></td>
            <td>Previous view</td>
        </tr>
        <tr>
            <td>Ctrl+Alt+v → S</td>
            <td></td>
            <td>Vertical split</td>
        </tr>
        <tr>
            <td>Ctrl+Alt+v → s</td>
            <td></td>
            <td>Horizontal split</td>
        </tr>
        <tr>
            <td>Ctrl+Alt+v → w</td>
            <td></td>
            <td>Unsplit</td>
        </tr>
        <tr>
            <td>Ctrl+Alt+v → W</td>
            <td></td>
            <td>Unsplit all</td>
        </tr>

        <tr>
            <td>Ctrl+0</td>
            <td></td>
            <td>Reset zoom level of all buffers</td>
        </tr>
    </tbody>
</table>


<h3 id="h-miscellaneous">Miscellaneous <a class="h-link" href="#h-miscellaneous">¶</a></h3>

<table>
    <thead>
        <tr>
            <th>Linux/Windows</th>
            <th>Mac OSX</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alt+o</td>
            <td></td>
            <td>Show list of recent files</td>
        </tr>
        <tr>
            <td>Ctrl+ScrollUp</td>
            <td></td>
            <td>Increase zoom level of all buffers</td>
        </tr>
        <tr>
            <td>Ctrl+ScrollDown</td>
            <td></td>
            <td>Decrease zoom level of all buffers</td>
        </tr>
        <tr>
            <td>Esc</td>
            <td></td>
            <td>Close focused dialog (e.g. find/replace, command entry, switch buffers, select lexer)</td>
        </tr>
    </tbody>
</table>
