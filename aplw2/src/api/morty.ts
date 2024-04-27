
async function obtenerPersonajes() {
    const url = 'https://rickandmortyapi.com/graphql';
    const query = `
        query {
            characters {
                results {
                    id
                    name
                    status
                    species
                    gender
                }
            }
        }
    `;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        });

        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }

        const data = await response.json();
        return data.data.characters.results;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

export { obtenerPersonajes };
