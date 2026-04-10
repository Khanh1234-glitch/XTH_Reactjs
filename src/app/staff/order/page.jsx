export default function Order() {
    return (
        <main className="container-fluid mt-5 pt-5">
            <h3 className="text-center mb-4">Danh sách đơn hàng tại quầy</h3>
            <div className="table-responsive">
                <table className="table table-bordered align-middle">
                    <thead className="table-dark">
                        <tr>
                            <th>Mã đơn</th>
                            <th>Bàn/Khách</th>
                            <th>Sản phẩm</th>
                            <th>Thời gian gọi</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#Q001</td>
                            <td>Bàn số 2</td>
                            <td>Cà phê sữa x2, Bạc sỉu x1</td>
                            <td>23/03/2026 - 20:45</td>
                            <td>
                                <span className="badge bg-warning text-dark">Chờ xác nhận</span>
                            </td>
                            <td>
                                <button className="btn btn-success btn-sm">Xác nhận</button>
                                <button className="btn btn-danger btn-sm">Hủy</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#Q002</td>
                            <td>Khách mang đi</td>
                            <td>Latte x1, Trà đào x1</td>
                            <td>23/03/2026 - 20:50</td>
                            <td>
                                <span className="badge bg-info text-dark">Đang chuẩn bị</span>
                            </td>
                            <td>
                                <button className="btn btn-primary btn-sm">Hoàn thành</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#Q003</td>
                            <td>Bàn số 5</td>
                            <td>Cà phê dừa x1</td>
                            <td>23/03/2026 - 20:55</td>
                            <td>
                                <span className="badge bg-success">Hoàn thành</span>
                            </td>
                            <td>
                                <button className="btn btn-secondary btn-sm" disabled>
                                    Đã xong
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
}
