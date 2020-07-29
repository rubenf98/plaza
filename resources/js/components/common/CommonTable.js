import React from "react";
import { Table } from "antd";

const CommonTable = ({
    handleTableChange,
    meta,
    loading,
    columns,
    data,
    expandedRowRender,
    summary,
    rowSelection
}) => {
    /*const pagination = {
        showSizeChanger: false,
        showQuickJumper: false,
        total: meta.total,
        showTotal: (total, range) => `${range[0]} to ${range[1]} of ${total}`,
        total: meta.total,
        current: meta.current_page,
        pageSize: meta.per_page,
    };*/
    return (
        <Table
            expandedRowRender={expandedRowRender}
            scroll={{ x: true }}
            rowKey={(record) => record.id}
            loading={loading}
            //pagination={pagination}
            summary={summary}
            onChange={handleTableChange}
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
        />
    );
};

export default CommonTable;
