CINE BY THEANHDEPTRAI – STREMIO CATALOG

This is a static Stremio movie catalog containing 242 unique movie entries.
The addon name and all visible catalog metadata have been renamed to:
Cine by TheAnhDepTrai

FILES
- manifest.json
  Addon manifest. Catalog ID: cine_library.
- catalog/movie/cine_library.json
  242 movie metadata entries (title, ID, poster).
- server.js
  Optional local Node.js server for testing.

GITHUB PAGES (recommended for Playlistio)
1. Create a PUBLIC GitHub repository, for example: Cine-by-TheAnhDepTrai
2. Upload the contents of this folder to the repository root. Keep the catalog/movie folder structure.
3. In GitHub, open Settings > Pages.
4. Under Build and deployment, select Deploy from a branch; choose main and /(root), then Save.
5. After GitHub Pages is published, the public manifest URL will be:
   https://YOUR-USERNAME.github.io/Cine-by-TheAnhDepTrai/manifest.json
6. Use that manifest URL in Playlistio's Add Catalogs from Manifest flow.

LOCAL TEST (optional)
1. Install Node.js LTS.
2. Open a terminal in this folder.
3. Run: node server.js
4. Manifest: http://localhost:8789/manifest.json
5. Catalog:  http://localhost:8789/catalog/movie/cine_library.json

IMPORTANT
- This addon supplies catalog metadata only. It does not contain or stream video.
- Playback/source availability depends on the user's installed Stremio stream addons.
- GitHub Pages hosts the JSON files over HTTPS; no Node.js server is required for GitHub Pages.
- The catalog currently contains movies only; series entries from the source export are not included.
