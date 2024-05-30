const FormRegister = () => {
    return (
        <div className='mt-12'>
            <form method='POST' autoComplete='off'>
                <div className='flex flex-col md:flex-row md:gap-12'>
                    <div className='mb-6 md:w-1/3'>
                        <label htmlFor="email" className='text-base font-semibold'>Email: </label>
                        <input type="email" name="email" placeholder="Nhập Email Của Nhân Viên...."
                            className='mt-2 p-2 border-2 border-orange-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full' />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row md:gap-12'>
                    <div className='mb-6 md:w-1/3'>
                        <label htmlFor="username" className='text-base font-semibold'>Tên đăng nhập: </label>
                        <input type="text" name="username" placeholder="Tên đăng nhập...."
                            className='mt-2 p-2 border-2 border-orange-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full' />
                    </div>
                    <div className='mb-6 md:w-1/3'>
                        <label htmlFor="role" className='text-base font-semibold'>Chức vụ nhân viên: </label>
                        <select className='mt-2 p-2 border-2 border-orange-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full'>
                            <option value="0">- - Chọn - -</option>
                            <option value="2">QL. Cửa hàng</option>
                            <option value="3">Brand</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row md:gap-12'>
                    <div className='mb-6 md:w-1/3'>
                        <label htmlFor="password" className='text-base font-semibold'>Mật khẩu: </label>
                        <input type="password" name="password" placeholder="Nhập mật khẩu...."
                            className='mt-2 p-2 border-2 border-orange-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full' />
                    </div>
                    <div className='mb-6 md:w-1/3'>
                        <label htmlFor="confirmPassword" className='text-base font-semibold'>Xác nhận mật khẩu: </label>
                        <input type="password" name="confirmPassword" placeholder="Xác nhận mật khẩu...."
                            className='mt-2 p-2 border-2 border-orange-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full' />
                    </div>
                </div>

                <div className=''>
                    <div className='mb-6 md:w-1/4 ml-auto mr-36'>
                        <button type='submit' className='p-3 bg-green-600 text-white rounded-md shadow-sm hover:bg-orange-500'>Đăng ký</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormRegister
