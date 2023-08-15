import React from 'react';
import {Pagination} from "@mui/material";

interface CustomPaginationProps {
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    onPageChanged: (page: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
                                                               totalUsersCount,
                                                               pageSize,
                                                               currentPage,
                                                               onPageChanged,
                                                           }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        onPageChanged(page);
    };

    return (
        <Pagination
            variant="outlined"
            count={pagesCount}
            page={currentPage}
            onChange={handlePageChange}
        />
    );
}

export default CustomPagination;