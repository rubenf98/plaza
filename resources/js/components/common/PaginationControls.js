import React from "react";
import { Pagination } from "antd";

let PaginationControls = ({ meta, handlePageChange }) => {
    return (
        <Pagination
            defaultCurrent={meta.current_page}
            total={meta.total}
            defaultPageSize={meta.per_page}
            onChange={handlePageChange}
        />

    );
};

export default PaginationControls;