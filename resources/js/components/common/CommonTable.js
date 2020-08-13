import React from "react";
import { Table } from "antd";

const CommonTable = ({
    handleTableChange,
    loading,
    columns,
    dataSource,
    pagination,
    summary,
    rowSelection
}) => {
    return (
        <Table
            rowKey={(record) => record.id}
            loading={loading}
            pagination={pagination}
            summary={summary}
            onChange={handleTableChange}
            rowSelection={rowSelection}
            columns={columns}
            dataSource={dataSource}
        />
    );
};

export default CommonTable;
