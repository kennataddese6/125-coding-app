import fs from 'fs';
import path from 'path';
export async function GET(req: any, res: any, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    const imagePath = path.join(process.cwd(), `storage/manuals/${id}.pdf`);
    const imageBuffer = fs.readFileSync(imagePath);
    return new Response(imageBuffer, {
      headers: {
        'Content-Type': 'file/pdf'
      }
    });
  } catch (error) {
    return new Response('Manual not found', {
      status: 404
    });
  }
}
