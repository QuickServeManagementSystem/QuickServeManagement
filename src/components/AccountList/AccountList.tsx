import {
    MRT_GlobalFilterTextField,
    MRT_TableBodyCellValue,
    MRT_TablePagination,
    MRT_ToolbarAlertBanner,
    flexRender,
    type MRT_ColumnDef,
    useMaterialReactTable,
} from 'material-react-table';
import {
    Box,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../services/store/store';
import { useEffect, useState } from 'react';
import { getAllUser } from '../../services/features/userSlice';
import { IUserInfo } from '../../models/UserInfor';

const columns: MRT_ColumnDef<IUserInfo>[] = [
    {
        accessorKey: 'userName',
        header: 'Tên Đăng nhập',
    },
    {
        accessorKey: 'email',
        header: 'Email',
        Cell: ({ cell }) => {
            const email = cell.row.original.email;
            return email.length > 15 ? email.substring(0, 15) + "..." : email;
        },
    },
    {
        accessorKey: 'roles',
        header: 'Chức danh',
        Cell: ({ cell }) => {
            if (cell.row.original.roles && cell.row.original.roles.includes('Brand_Manager')) {
                return 'QL. Thương hiệu';
            }
            if (cell.row.original.roles && cell.row.original.roles.includes('Admin')) {
                return 'Quản trị viên';
            }
            if (cell.row.original.roles && cell.row.original.roles.includes('Store_Manager')) {
                return 'QL. Cửa hàng';
            }
            if (cell.row.original.roles && cell.row.original.roles.includes('Staff')) {
                return 'Nhân viên';
            }
            if (cell.row.original.roles && cell.row.original.roles.includes('Customer')) {
                return 'Khách hàng';
            }
            else {
                return cell.row.original.roles;
            }
        },
    },
    {
        accessorKey: 'phoneNumber',
        header: 'Số điện thoại',
    },
    {
        accessorKey: 'name',
        header: 'Tên',
    },
    {
        accessorKey: 'address',
        header: 'Địa chỉ',
    },
    {
        accessorKey: 'avatar',
        header: 'Ảnh đại diện',
    },
    {
        accessorKey: 'created',
        header: 'Ngày tạo',
        Cell: ({ cell }) => {
            if (typeof cell.row.original.created === 'string') {
                const date = cell.row.original.created.split('T')[0];
                return date;
            } else if (cell.row.original.created instanceof Date) {
                return cell.row.original.created.toISOString().split('T')[0];
            } else {
                return cell.row.original.created;
            }
        },
    }
];

const AccountList = () => {
    const dispatch = useAppDispatch();
    const { users } = useAppSelector((state) => state.users);
    const [userId, setUserId] = useState<string>('');
    const [onPopupDetail, setOnPopupDetail] = useState<boolean>(false);

    const handleShowDetail = (userId: string) => {
        setUserId(userId);
        console.log(userId)
        setOnPopupDetail(true);
    }


    console.log(users)
    useEffect(() => {
        dispatch(getAllUser());
    }, [dispatch]);

    const table = useMaterialReactTable({
        columns,
        data: users || [],
        enableRowSelection: false,
        initialState: {
            pagination: { pageSize: 5, pageIndex: 0 },
            showGlobalFilter: true,
        },
        muiPaginationProps: {
            rowsPerPageOptions: [5, 10, 15],
            variant: 'outlined',
        },
        paginationDisplayMode: 'pages',
    });

    return (
        <Stack sx={{ m: '2rem 0' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem',
                }}
            >
                <MRT_GlobalFilterTextField table={table} />
                <MRT_TablePagination table={table} />
            </Box>
            <Typography variant="subtitle2" sx={{ textAlign: 'left', marginLeft: '16px', fontSize: '14px', color: 'red' }}>* Vui lòng nhấn đúp vào 1 hàng để xem thông tin chi tiết</Typography>
            <TableContainer className='p-4'>
                <Table>
                    <TableHead className='bg-orange-500'>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableCell align="left" variant="head" key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : <Typography fontWeight={700} color={'black'}>
                                                {flexRender(
                                                    header.column.columnDef.Header ?? header.column.columnDef.header,
                                                    header.getContext(),
                                                )}
                                            </Typography>
                                        }
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableHead>
                    <TableBody>
                        {table.getRowModel().rows.map((row, rowIndex) => (
                            <TableRow
                                key={row.id}
                                selected={row.getIsSelected()}
                                onDoubleClick={() => handleShowDetail(row.original.id)}
                                style={{ backgroundColor: rowIndex % 2 === 0 ? 'white' : '#d9d9d9' }}
                            >
                                {row.getVisibleCells().map((cell, _columnIndex) => (
                                    <TableCell align="left" variant="body" key={cell.id}>
                                        <MRT_TableBodyCellValue
                                            cell={cell}
                                            table={table}
                                            staticRowIndex={rowIndex}
                                        />
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <MRT_ToolbarAlertBanner stackAlertBanner table={table} />
        </Stack>
    );
};

export default AccountList;

