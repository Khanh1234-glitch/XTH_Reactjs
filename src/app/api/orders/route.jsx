import clientPromise from "@/libs/mongodb";

export async function POST(request) {
    try {
        const client = await clientPromise;
        const db = client.db();
        const body = await request.json();
        const { name, table_id, order_items, total } = body;
        if (!name || !table_id || !order_items || !total) {
            return Response.json({ error: "Thieu thong tin don hang" }, { status: 400 });
        }
        const newOrder = {
            ...body,
            created_at: new Date(),
        };
        const result = await db.collection("orders").insertOne(newOrder);

        return Response.json({ message: "Don hang da duoc tao moi" });
    } catch (error) {
        console.error(error);
        return Response.json({ error: "Don hang tao that bai" });
    }
}
