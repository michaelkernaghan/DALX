import { create } from 'ipfs-http-client';
import { Buffer } from 'buffer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
    // Configure auth for Infura IPFS
    const projectId = process.env.INFURA_PROJECT_ID;
    const projectSecret = process.env.INFURA_API_SECRET;
    const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

    const ipfs = create({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https',
        headers: {
            authorization: auth
        }
    });

    // Read the image file
    const imageFile = fs.readFileSync('/home/mike/DALX/dalek.png');
    
    try {
        // Upload the image to IPFS
        const imageResult = await ipfs.add(Buffer.from(imageFile));
        const imageUri = `ipfs://${imageResult.path}`;
        console.log('Image uploaded to IPFS:', imageUri);

        // Update metadata with the IPFS image URI
        const metadata = JSON.parse(fs.readFileSync(path.join(__dirname, '../metadata/token-metadata.json')));
        metadata.image = imageUri;

        // Upload metadata to IPFS
        const metadataResult = await ipfs.add(JSON.stringify(metadata));
        const metadataUri = `ipfs://${metadataResult.path}`;
        console.log('Metadata uploaded to IPFS:', metadataUri);

        // Save updated metadata locally
        fs.writeFileSync(
            path.join(__dirname, '../metadata/token-metadata.json'),
            JSON.stringify(metadata, null, 2)
        );

        console.log('Token metadata updated successfully');
    } catch (error) {
        console.error('Error uploading to IPFS:', error);
    }
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    }); 