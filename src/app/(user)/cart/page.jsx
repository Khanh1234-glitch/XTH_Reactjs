"use client";
import { useEffect, useState } from "react";

export default function Cart() {
    const [cart, setCart] = useState([]);
    const [tableList, setTableList] = useState([]);

    useEffect(async () => {
        setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
        const res = await fetch(`http://localhost:3000/api/tables`);
        const tables = await res.json();
        setTableList(tables);
    }, []);
    const handleQuantity = (id, value) => {
        const newCart = [...cart];
        const index = newCart.findIndex((p) => p._id == id);
        newCart[index].quantity = Number(value);
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };
    const handleRemove = (id) => {
        const newCart = [...cart];
        const index = newCart.findIndex((p) => p._id == id);
        newCart.splice(index, 1);
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };
    const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
    const handleRemoveAll = () => {
        setCart([]);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };
    const [inputTable, setInputTable] = useState(null);
    const handleOrder = () => {
        // Gia bo da duoc thanh toan
        const order = {
            name: "Ten khach", //Lay tu chuc nang dang nhap
            table_id: inputTable, //id ban khach chon
            order_items: cart, //danh sach trong gio
            total: total, // tong tien don hang
        };
        fetch(`http://localhost:3000/api/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        });
    };
    return (
        <main class="container mt-5 pt-5">
            <h1 class="text-center mb-4">Giỏ hàng của bạn</h1>
            <div class="table-responsive">
                <table class="table table-bordered align-middle">
                    <thead class="table-dark">
                        <tr>
                            <th>Sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Giá</th>
                            <th>Tổng</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(cart)}
                        {cart.map((p) => (
                            <tr key={p._id}>
                                <td>{p.name}</td>
                                <td>
                                    <input
                                        onChange={(e) => handleQuantity(p._id, e.target.value)}
                                        type="number"
                                        class="form-control"
                                        value={p.quantity}
                                        min="1"
                                    />
                                </td>
                                <td>{p.price.toLocaleString("vi-VN")}đ</td>
                                <td>{(p.quantity * p.price).toLocaleString("vi-VN")}đ</td>
                                <td>
                                    <button class="btn btn-danger btn-sm" onClick={(e) => handleRemove(p._id)}>
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan={3}>Tong cong</th>
                            <th>{total.toLocaleString("vi-VN")}d</th>
                            <th>
                                {" "}
                                <button class="btn btn-danger btn-sm" onClick={handleRemoveAll}>
                                    Xóa
                                </button>
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div class="row mt-4">
                <div class="col-md-6 offset-md-6">
                    <label htmlFor="tableSelect" class="form-label">
                        Chọn vị trí bàn:
                    </label>
                    <select class="form-select" id="tableSelect" onChange={(e) => setInputTable(e.target.value)}>
                        <option selected disabled>
                            -- Vui lòng chọn bàn --
                        </option>
                        {tableList.map((t) => (
                            <option key={t._id} value={t._id}>
                                {t.name} ({t.location})
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div class="d-flex justify-content-end mt-3">
                <button class="btn btn-success" onClick={handleOrder}>
                    Thanh toán
                </button>
            </div>
        </main>
    );
}
