import clientPromise from "@/libs/mongodb";

export async function GET(request) {
    try {
        const client = await clientPromise;
        const db = client.db();
        const productList = await db.collection("products").find({}).toArray();
        return Response.json(productList);
    } catch (error) {
        console.error(error);
        return Response.json({ error: "Loi ket noi co so du lieu" });
    }
}
export function POST() {}
