import clientPromise from "@/libs/mongodb";

export async function GET(request) {
    try {
        const client = await clientPromise;
        const db = client.db();
        const tableList = await db.collection("tables").find({}).toArray();
        return Response.json(tableList);
    } catch (error) {
        console.error(error);
        return Response.json({ error: "Loi ket noi co so du lieu" });
    }
}
