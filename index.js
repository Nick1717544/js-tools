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
        } else { return 'error' }
    }

    /**
     * 
     * @param {string} letter 
     * @param {number} position 
     */

    searchPosition(letter, position = 0)
    {
        if (position !== 0 && position <= this.word.length && letter.length > 0 && letter.length < 2)
        {
            if (this.caseSensitive == true)
            {
                const calculatedPosition = position - 1
                return this.word[calculatedPosition] == letter
            }
            if (this.caseSensitive == false)
            {
                const calculatedPosition = position - 1
                return this.word[calculatedPosition].toLowerCase() == letter.toLowerCase()
            }
        } else { return 'error' }
    }

    /**
     * 
     * @param {string} letter 
     * @param {number} position 
     */

    searchWithoutPosition(letter, position = 0)
    {
        if (position !== 0 && position <= this.word.length && letter.length > 0 && letter.length < 2)
        {
            if (this.caseSensitive == true)
            {
                const calculatedPosition = position - 1
                const positions = []
                for (let i = 0; i < this.word.length; i++)
                {
                    if (this.word[i] == letter)
                    {
                        if (i !== calculatedPosition) {positions.push(i + 1)}
                    }
                }
                if (positions.length == 0)
                {
                    return false
                } else { return true, positions }
            }
            if (this.caseSensitive == false)
            {
                const calculatedPosition = position - 1
                const positions = []
                const lowerWord = this.word.toLowerCase()
                const lowerLetter = letter.toLowerCase()
                for (let i = 0; i < this.word.length; i++)
                {
                    if (lowerWord[i] == lowerLetter)
                    {
                        if (i !== calculatedPosition) {positions.push(i + 1)}
                    }
                }
                if (positions.length == 0)
                {
                    return false
                } else { return true, positions }
            }
        } else { return 'error' }
    }
}

const word = new Word('hello', {caseSensitive: true})
console.log(word.searchWithoutPosition('e', 3));