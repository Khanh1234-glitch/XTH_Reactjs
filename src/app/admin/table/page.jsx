export default function Table() {
    return (
        <div className="content">
            <div className="row">
                <div className="col-md-8">
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            <h4 className="card-title mb-3">Danh sách bàn</h4>
                            <div className="table-responsive">
                                <table className="table table-bordered align-middle">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>ID Bàn</th>
                                            <th>Tên bàn</th>
                                            <th>Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>T01</td>
                                            <td>Bàn số 1</td>
                                            <td>
                                                <button className="btn btn-warning btn-sm">Sửa</button>
                                                <button className="btn btn-danger btn-sm">Xóa</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>T02</td>
                                            <td>Bàn số 2</td>
                                            <td>
                                                <button className="btn btn-warning btn-sm">Sửa</button>
                                                <button className="btn btn-danger btn-sm">Xóa</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>T03</td>
                                            <td>Bàn VIP</td>
                                            <td>
                                                <button className="btn btn-warning btn-sm">Sửa</button>
                                                <button className="btn btn-danger btn-sm">Xóa</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h4 className="card-title mb-3">Thêm / Sửa bàn</h4>
                            <form>
                                <div className="mb-3">
                                    <label for="tableId" className="form-label">
                                        ID Bàn
                                    </label>
                                    <input type="text" className="form-control" id="tableId" placeholder="Ví dụ: T01" required />
                                </div>
                                <div className="mb-3">
                                    <label for="tableName" className="form-label">
                                        Tên bàn
                                    </label>
                                    <input type="text" className="form-control" id="tableName" placeholder="Ví dụ: Bàn số 1" required />
                                </div>
                                <button type="submit" className="btn btn-dark">
                                    Lưu thay đổi
                                </button>
                                <button type="reset" className="btn btn-outline-secondary">
                                    Hủy
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
