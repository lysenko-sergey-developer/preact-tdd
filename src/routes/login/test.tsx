import { h } from 'preact';
import Login from './';
import { render, cleanup, fireEvent } from '@testing-library/preact'

afterEach(cleanup);

describe('initial state', () => {
  test("should have form with inputs username and passoword, and button login", () => {
    const { container } = render(<Login />);
    expect(container.getElementsByTagName("form")[0]).toBeDefined();
    expect(container.getElementsByTagName('input').length).toBe(2);
    expect(container.getElementsByTagName('input')[0].dataset.testId).toBe("username");
    expect(container.getElementsByTagName('input')[1].dataset.testId).toBe("password");
    expect(container.getElementsByTagName('button')[0]).toBeDefined();
    expect(container.getElementsByTagName('button')[0].textContent).toBe("Login");
  })

  test("inputs should have empty value", () => {
    const { container } = render(<Login />);
    expect(container.getElementsByTagName('input')[0].value).toBe("");
    expect(container.getElementsByTagName('input')[1].value).toBe("");
  })

  test("password should be hidden from user", () => {
    const { container } = render(<Login />);
    expect(container.getElementsByTagName('input')[1].hasAttribute("type")).toBeDefined();
    expect(container.getElementsByTagName('input')[1].getAttribute("type")).toBe("password");
  })

  test("button should be disabled if inputs empty", () => {
    const { container } = render(<Login />);
    expect(container.getElementsByTagName('input')[0].value).toBe("");
    expect(container.getElementsByTagName('input')[1].value).toBe("");
    expect(container.getElementsByTagName('button')[0].disabled).toBeTruthy();
  })
});

describe("user interacting", () => {
  test("username should change if user edit it", () => {
    const { container } = render(<Login />);
    
    const usernameInput = container.getElementsByTagName('input')[0];

    expect(usernameInput.value).toBe("");
    expect(usernameInput.dataset.testId).toBe("username");

    const userName = "testUser";
    fireEvent.change(usernameInput, { target: { value: userName }});

    expect(usernameInput.value).toBe(userName);
  });

  test("password should change if user edit it", () => {
    const { container } = render(<Login />);
    
    const passwordInput = container.getElementsByTagName('input')[1];

    expect(passwordInput.value).toBe("");
    expect(passwordInput.dataset.testId).toBe("password");

    const password = "testPassword";
    fireEvent.change(passwordInput, { target: { value: password }});

    expect(passwordInput.value).toBe(password);
  });

  test("button should be enabled if username and password filled", () => {
    const { container } = render(<Login />);
    const usernameInput = container.getElementsByTagName('input')[0];
    const passwordInput = container.getElementsByTagName('input')[1];
    const submitButton = container.getElementsByTagName('button')[0];

    expect(usernameInput.value).toBe("");
    expect(passwordInput.value).toBe("");
    expect(submitButton.disabled).toBeTruthy();
    
    fireEvent.change(usernameInput, { target: { value: "userName" }});
    fireEvent.change(passwordInput, { target: { value: "password" }});


    expect(submitButton.disabled).toBeFalsy();
  })
})
