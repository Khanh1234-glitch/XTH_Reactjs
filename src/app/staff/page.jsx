export default function Pos() {
    return (
        <main className="container-fluid mt-5 pt-4">
            <div className="row">
                <div className="col-sm-6 col-md-8">
                    <div className="d-flex mb-3 justify-content-between">
                        <h3 className="mb-0">Chọn món</h3>
                        <form className="w-50">
                            <input type="search" className="form-control" placeholder="Tìm món theo tên hoặc ID" />
                        </form>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 col-md-3 mb-3">
                            <div className="card h-100">
                                <img src="/img/ca-phe-sua.png" className="card-img-top" />
                                <div className="card-body text-center">
                                    <h6 className="card-title">Cà phê sữa</h6>
                                    <p>30.000đ</p>
                                    <button className="btn btn-dark">Thêm</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-3 mb-3">
                            <div className="card h-100">
                                <img src="/img/ca-phe-den.png" className="card-img-top" />
                                <div className="card-body text-center">
                                    <h6 className="card-title">Cà phê đen</h6>
                                    <p>45.000đ</p>
                                    <button className="btn btn-dark">Thêm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 border-start">
                    <div className="d-flex mb-3 justify-content-between">
                        <h3 className="mb-0">Khách hàng</h3>
                        <div className="btn-group w-50">
                            <div className="btn btn-dark w-50">Khách lẻ</div>
                            <div className="btn btn-outline-dark w-50">Thành viên</div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <form>
                            <input type="search" className="form-control" placeholder="Nhập tên hoặc số điện thoại" />
                        </form>
                    </div>

                    <div className="position-sticky" style={{ minHeight: 75 + "px" }}>
                        <h3 className="mb-3">Hóa đơn</h3>
                        <div className="card">
                            <div className="card-body">
                                <table className="table table-sm">
                                    <thead>
                                        <tr>
                                            <th>Món</th>
                                            <th>SL</th>
                                            <th>Giá</th>
                                            <th>Tổng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Cà phê sữa</td>
                                            <td>2</td>
                                            <td>30.000đ</td>
                                            <td>60.000đ</td>
                                        </tr>
                                        <tr>
                                            <td>Latte</td>
                                            <td>1</td>
                                            <td>45.000đ</td>
                                            <td>45.000đ</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr />
                                <h5 className="text-end">Tổng cộng: 105.000đ</h5>
                                <div className="d-flex mt-3 justify-content-between">
                                    <button className="btn btn-outline-danger">Hủy hóa đơn</button>
                                    <button className="btn btn-success w-50">Thanh toán</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
