/**
 * Testing params
 */

console.clear()

class Word
{
    /**
     * 
     * @param {string: a word} word 
     */
    constructor(word, _options = {
        caseSensitive: true,
    })
    {
        this.word = word
        this.caseSensitive = _options.caseSensitive
    }

    /**
     * 
     * @param {string} letter 
     */

    search(letter)
    {
        if (letter.length > 0 && letter.length < 2)
        {
            if (this.caseSensitive == true)
            {
                return this.word.includes(letter)
            }
            if (this.caseSensitive == false)
            {
                return this.word.toLowerCase().includes(letter.toLowerCase())
            }
        }
    }
}

const word = new Word('hello', {caseSensitive: true})
console.log(word.search('L'));