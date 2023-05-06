import fs from 'fs';

function countWords(text) {
    return text.split(/\s+/).length;
}

function countWordsInFile(filename) {
    return new Promise((resolve, reject) => {
        let wordCount = 0;
        const readStream = fs.createReadStream('./input.txt', 'utf-8');
        readStream.on('data', (chunk) => {
            const chunkWordCount = countWords(chunk);
            wordCount += chunkWordCount;
        });
        readStream.on('end', () => {
            resolve(wordCount);
        });
        readStream.on('error', (error) => {
            reject(error);
        });
    });
}

const wordCount = countWordsInFile('./input.txt');
console.log(await wordCount);