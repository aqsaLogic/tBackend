import { URLs } from "../Models/url.js";
import { getCache, setCache } from "../Utils/redis.js";

export const RedirectURL = async (req, res) => {
    const { shortId } = req.params;
    try {
        // Pehle Redis cache check karo
        const urlFromCache = await getCache(shortId);
        if (urlFromCache) {
            res.redirect(urlFromCache);
            return;
        }

        // Cache miss — MongoDB se lo
        const element = await URLs.findOne({ shortId });
        if (!element) return res.status(404).json({ ok: false, message: "URL not found" });

        // Cache mein save karo
        await setCache(shortId, element.longUrl, 7400);

        res.redirect(element.longUrl);
    } catch (err) {
        res.status(500).json({ ok: false, error: err.message });
    }
};