import { Outlet} from "react-router-dom";
import style from "./sign-in-up.module.css"

const SignInUp = () => {
  return(
    <main className={style.main}>
      <div className={style.main__window}>
        <Outlet />
      </div>
    </main>
  )
}

export default SignInUp;