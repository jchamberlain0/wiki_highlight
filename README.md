## Wikipedia is a Highlighter

#### Usage

1. Install [Tampermonkey](https://www.tampermonkey.net/) or [ViolentMonkey](https://violentmonkey.github.io/), or your userscript manager of choice.
2. Copy `wiki.js` into a new userscript.

---

The first sentence on a wikipedia article usually follows a variation of the form **X** _is a_ **Y**.

The part of the sentence following the _is-a_ relation is often the best place to begin reading on a new subject, but the location on the page where salient part of the sentence begins is variable.

It's sometimes hidden underneath an inline list of etymology and pronunciation guides.
It takes a human like myself a second or two to scan through and locate the meaningful part of the sentence.

The thread of human curiosity hangs in the balance as your eyes dart around, thirsty for knowledge.

In my opinion, these linguistic guides should go after the first paragraph in the Quick Facts section of the article instead (info panel on the right), because they are of relatively less importance than the is-a relation.

The solution is to highlight the first occurence of a match for the six forms of this grammatic structure in english:

|            description            |    form     |
| :-------------------------------: | :---------: |
|        present indefinite         |  **is a**   |
|          past indefinite          |  **was a**  |
| present indefinite _before vowel_ |  **is an**  |
|  past indefinite _before vowel_   | **was an**  |
|         present definite          | **is the**  |
|           past definite           | **was the** |

These are captured by a simple regular expression:

```
\s(was|is)\s(a|an|the)\s
```

This way you can locate the information instantly.
