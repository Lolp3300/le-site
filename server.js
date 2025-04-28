const express = require('express');
const app = express();
const nhentai = require('nhentai-js');
const cors = require('cors');

app.use(cors()); // Autoriser les requêtes depuis ton site
app.use(express.json());

// Route pour rechercher par tag
app.get('/search/:tag', async (req, res) => {
    const tag = req.params.tag;
    try {
        const results = await nhentai.search(tag);
        res.json(results.results); // envoyer juste les résultats
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la recherche.' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur lancé sur http://localhost:${PORT}`));
