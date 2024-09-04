document.getElementById('search-button').addEventListener('click', function() {
    const word = document.getElementById('word-input').value;
    if (word) {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then(response => response.json())
            .then(data => {
                const resultBox = document.getElementById('result');
                if (data.title) {
                    resultBox.innerHTML = `<p>No definition found for "${word}".</p>`;
                } else {
                    const definition = data[0].meanings[0].definitions[0].definition;
                    resultBox.innerHTML = `<p><strong>${word}:</strong> ${definition}</p>`;
                }
            })
            .catch(error => {
                console.error('Error fetching the dictionary data:', error);
            });
    }
});
