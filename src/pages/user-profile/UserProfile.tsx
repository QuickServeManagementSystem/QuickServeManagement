import { FaKey, FaLock } from "react-icons/fa"
import SidebarComponent from "../../components/ManagementComponent/SidebarComponent "
import UserInformation from "../../components/UserProfileComponent/UserInformation"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../../services/store/store"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { getUserById } from "../../services/features/userSlice"

const UserProfile = () => {
    const dispatch = useAppDispatch()
    const { account } = useSelector((state: any) => state.account)
    const { user } = useSelector((state: any) => state.users)
    console.log(user)

    useEffect(() => {
        dispatch(getUserById({ id: account.id }))
    }, [])


    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-12 md:p-0">
                <div className="md:col-span-2">
                    <SidebarComponent />
                </div>

                <div className="md:col-span-10 mt-20">
                    <div className="flex">
                        <div className="flex">
                            <FaKey className="text-3xl text-orange-500" />
                            <h3 className="text-3xl font-bold ml-6">Thông tin tài khoản</h3>
                        </div>
                        <div className="ml-auto">
                            <Link to='/admin-register'>
                                <button className="bg-yellow-500 hover:bg-orange-700 text-white font-bold p-3 flex items-center justify-between mr-12 rounded-full">
                                    <FaLock className="text-base mr-2" />
                                    <span>Thay đổi mật khẩu</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <UserInformation
                            userId={user?.id}
                            username={user?.userName}
                            email={user?.email}
                            role={user?.roles[0]}
                            phoneNumber={user?.phoneNumber}
                            name={user?.name}
                            address={user?.address}
                            avatar={user?.avatar}
                            created={user?.created}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
