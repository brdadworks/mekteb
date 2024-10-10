import mammoth from 'mammoth';

export const convertWordToHtml = async (file: File): Promise<string | null> => {
    try {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.convertToHtml({ arrayBuffer });
        return result.value; // Bu, HTML içeriğidir
    } catch (error) {
        console.error("Dosya dönüştürme hatası:", error);
        return null;
    }
};