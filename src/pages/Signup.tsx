import React, { useState } from "react";

const SignUp = () => {
  const useInput = (initialValue: string | number) => {
    const [value, setValue] = useState(initialValue);
    const [message, setMessage] = useState("");
    return {
      value,
      message,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value as string),
      changeValue: (text: string | number) => setValue(text),
      addMessage: (message: string) => setMessage(message),
    };
  };

  const username = useInput("");
  const email = useInput("");
  const password = useInput("");
  const confirmPassword = useInput("");
  const errMessage = useInput("");

  // const history = useHistory();

  const clickSignUpBtn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (!username.value) {
      errMessage.addMessage("ユーザー名を入力してください");
      return;
    } else if (!email.value) {
      errMessage.addMessage("メールアドレスを入力してください");
      return;
    } else if (!password.value) {
      errMessage.addMessage("パスワードを入力してください");
      return;
    } else if (!confirmPassword) {
      errMessage.addMessage("確認用パスワードを入力してください");
      return;
    } else if (password.value !== confirmPassword.value) {
      errMessage.addMessage("パスワードが一致しません。");
      return;
    } else {
      username.changeValue("");
      email.changeValue("");
      password.changeValue("");
      confirmPassword.changeValue("");
    }
  };

  return (
    <div className="center">
      <div className="justify-content-md-center">
        <form>
          {errMessage.message}
          <p>
            <b>サインアップ</b>
          </p>
          <div>
            <label>ユーザー名</label>
            <input
              type="text"
              placeholder="ユーザー名を入力してください"
              {...username}
            />
          </div>
          <div>
            <label>メールアドレス</label>
            <input
              type="text"
              placeholder="メールアドレスを入力してください"
              {...email}
            />
          </div>
          <div>
            <label>パスワード</label>
            <input
              type="password"
              placeholder="パスワードを入力してください"
              {...password}
            />
          </div>
          <div>
            <label>確認用パスワード</label>
            <input
              type="password"
              placeholder="パスワードを入力してください"
              {...confirmPassword}
            />
          </div>
          <button type="button" onClick={clickSignUpBtn}>
            サインアップ
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
