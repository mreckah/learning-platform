// Question : Comment gérer efficacement le cache avec Redis ?
// Réponse :Utiliser des fonctions génériques pour stocker set et récupérer get des données avec un TTL pour éviter les données obsolètes.
// Question: Quelles sont les bonnes pratiques pour les clés Redis ?
// Réponse :Utilisez des clés structurées et explicites (ex : user:123:profile) pour faciliter la gestion et éviter les conflits.


const redisClient = require('../config/db'); 
// Fonctions utilitaires pour Redis
async function cacheData(key, data, ttl) {
    // TODO: Implémenter une fonction générique de cache
    try {
      await redisClient.set(key, JSON.stringify(data), 'EX', ttl);
      console.log(`✅ Cached data under key: ${key}`);
    } catch (error) {
      console.error('❌ Error caching data:', error);
    }
  }
  // Fonction pour récupérer des données mises en cache
async function getCachedData(key) {
  try {
    const data = await redisClient.get(key);
    return data ? JSON.parse(data) : null; // Retourne null si aucune donnée n'est trouvée
  } catch (error) {
    console.error('❌ Error retrieving cached data:', error);
    return null;
  }
}
  
  module.exports = {
    // TODO: Exporter les fonctions utilitaires
    cacheData,
  getCachedData,
  };
