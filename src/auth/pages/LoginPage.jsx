// import React from 'react';
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
// import { Button, Checkbox, Form, Input } from 'antd';

// export const LoginPage = () => {
//   const onFinish = values => {
//     console.log('Received values of form: ', values);
//   };
//   return (
//     <>
//       <h1>LOGIN</h1>
//       <Form
//         name="normal_login"
//         className="login-form"
//         initialValues={{
//           remember: true,
//         }}
//         onFinish={onFinish}>
//         <Form.Item
//           name="username"
//           rules={[
//             {
//               required: true,
//               message: 'Please input your Username!',
//             },
//           ]}>
//           <Input
//             prefix={<UserOutlined className="site-form-item-icon" />}
//             placeholder="Username"
//           />
//         </Form.Item>
//         <Form.Item
//           name="password"
//           rules={[
//             {
//               required: true,
//               message: 'Please input your Password!',
//             },
//           ]}>
//           <Input
//             prefix={<LockOutlined className="site-form-item-icon" />}
//             type="password"
//             placeholder="Password"
//           />
//         </Form.Item>
//         <Form.Item>
//           <Form.Item name="remember" valuePropName="checked" noStyle>
//             <Checkbox>Remember me</Checkbox>
//           </Form.Item>

//           <a className="login-form-forgot" href="">
//             Forgot password
//           </a>
//         </Form.Item>

//         <Form.Item>
//           <Button
//             type="primary"
//             htmlType="submit"
//             className="login-form-button">
//             Log in
//           </Button>
//           Or <a href="">register now!</a>
//         </Form.Item>
//       </Form>
//     </>
//   );
// };

import './LoginPage.css';

export const LoginPage = () => {
  return (
    <section className='vh-100'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-6 text-black'>
            <div className='px-5 ms-xl-4'>
              <i
                className='fas fa-crow fa-2x me-3 pt-5 mt-xl-4'
                style={{ color: `#709085` }}
              ></i>
              <span className='h1 fw-bold mb-0'>LogoEmpresa</span>
            </div>

            <div className='d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5'>
              <form style={{ width: `23rem` }}>
                <h3
                  className='fw-normal mb-3 pb-3'
                  style={{ letterSpacing: `1px` }}
                >
                  Log in
                </h3>

                <div className='form-outline mb-4'>
                  <input
                    type='email'
                    id='form2Example18'
                    className='form-control form-control-lg'
                  />
                  <label className='form-label' htmlFor='form2Example18'>
                    Email address
                  </label>
                </div>

                <div className='form-outline mb-4'>
                  <input
                    type='password'
                    id='form2Example28'
                    className='form-control form-control-lg'
                  />
                  <label className='form-label' htmlFor='form2Example28'>
                    Password
                  </label>
                </div>

                <div className='pt-1 mb-4'>
                  <button
                    className='btn btn-info btn-lg btn-block'
                    type='button'
                  >
                    Login
                  </button>
                </div>

                <p className='small mb-5 pb-lg-2'>
                  <a className='text-muted' href='#!'>
                    Forgot password?
                  </a>
                </p>
                <p>
                  Don't have an account?{' '}
                  <a href='#!' className='link-info'>
                    Register here
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div className='col-sm-6 px-0 d-none d-sm-block'>
            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp'
              alt='Login image'
              className='w-100 vh-100'
              style={{ objectFit: `cover`, objectPosition: `left` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
