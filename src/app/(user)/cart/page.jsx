"use client";
import { useEffect, useState } from "react";

export default function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
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
                    <select class="form-select" id="tableSelect">
                        <option selected disabled>
                            -- Vui lòng chọn bàn --
                        </option>
                        <option value="1">Bàn số 1 (Tầng trệt)</option>
                        <option value="2">Bàn số 2 (Tầng trệt)</option>
                        <option value="3">Bàn số 3 (Ban công)</option>
                        <option value="4">Bàn số 4 (Tầng 2)</option>
                        <option value="5">Bàn số 5 (Tầng 2)</option>
                    </select>
                </div>
            </div>

            <div class="d-flex justify-content-end mt-3">
                <h4 class="me-3">Tổng cộng: 105.000đ</h4>
                <button class="btn btn-success">Thanh toán</button>
            </div>
        </main>
    );
}
