import React, { useState } from 'react';
import { Button, Form, Input, Space, AutoComplete } from 'antd';

const onFinish = (values) => {
  console.log('Received values of form: ', values);
};

const users = [
  {
     id:'1',
    firstname: 'Sahithi',
    lastname: 'Pala',
    email: 'pala-sahithi@gmail.com',
    phoneNumber:'789064214',
    address: '123 Main St, Cityville',
  },
  {
     id:'2',
    firstname: 'Harini',
    lastname: 'Akki',
    email: 'akkiharini@gmail.com',
    phoneNumber: '9876543210',
    address: '456 Park Ave, Townsville',
  },
  {
  
    firstname: 'Vani',
    lastname: 'varma',
    email: 'varmavani9@gmail.com',
    phoneNumber: '987612370',
    address: '456 Park Ave, Townsville',
  },
  
];

const Login = () => {
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);

  const handleUserSearch = (value) => {
    const filteredOptions = users
      .filter((user) => user.firstname.toLowerCase().includes(value.toLowerCase()))
      .map((user) => ({
        value: user.firstname
      
      }));
    setAutocompleteOptions(filteredOptions);
  };

  const handleUserSelect = (value) => {
    const selectedUser = users.find((user) => user.firstname === value);
  
    form.setFieldsValue({
      Firstname: selectedUser.firstname,
      Lastname: selectedUser.lastname,
      email: selectedUser.email,
      'Phone number': selectedUser.phoneNumber,
      Address: selectedUser.address,
    });
  };

  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name="complex-form"
      onFinish={onFinish}
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
        marginTop: 50,
      }}
    >
      <Form.Item name="Firstname" label="Firstname">
        
        <AutoComplete
          options={autocompleteOptions}
          onSelect={handleUserSelect}
          onSearch={handleUserSearch}
          placeholder="Enter first name"
        >
          <Input 
          style={{
            width: 280,
          }}/>
        </AutoComplete>
      </Form.Item>

    
      <Form.Item name="Lastname" label="Lastname">
        <Input
          name="Lastname"
          style={{
            width: 280,
          }}
          placeholder="Enter Lastname"
        />
      </Form.Item>

      <Form.Item name= "email" label="Email">
        <Input
          name="email"
          style={{
            width: 280,
          }}
          placeholder="Enter Email"
        />
      </Form.Item>

      <Form.Item name="Phone number" label="Phone number">
        <Input
          name="Phone number"
          style={{
            width: 280,
          }}
          placeholder="Enter Phone number"
        />
      </Form.Item>

      <Form.Item name ="Address" label="Address">
        <Input.TextArea
          name="Address"
          showCount
          maxLength={100}
          style={{
            width: 280,
          }}
          placeholder="Enter Address"
        />
      </Form.Item>

      <Form.Item label=" " colon={false}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default Login;
