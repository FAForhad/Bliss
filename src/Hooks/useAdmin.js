import { useEffect, useState } from "react";

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://bliss-bd.vercel.app/admin/allusres/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data.role)
                    setIsAdminLoading(false);
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading];
};
export default useAdmin;