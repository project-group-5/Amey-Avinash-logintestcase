import { render, screen,fireEvent } from '@testing-library/react';
import MyLogin from './mylogin';
describe('testing login ui', () => { afterEach(() => {
    console.log("clean up done...")
})
beforeEach(() => {
    console.log("initialization done")
})
    it('login page', () => {
render(<Login/>)
fireEvent.change(screen.getByTestId('useremail'),{target:{value:'admin'}})
fireEvent.change(screen.getByTestId('password'),{target:{value:'admin123'}})
fireEvent.click(screen.getByTestId('submitctrl'))
expect(screen.getByTestId('msglbl').textContent).toBe("valid user")

fireEvent.change(screen.getByTestId('username'),{target:{value:'admin'}})
fireEvent.change(screen.getByTestId('password'),{target:{value:'admin1234'}})
fireEvent.click(screen.getByTestId('submitctrl'))
expect(screen.getByTestId('msglbl').textContent).toBe("invalid user")

        
    });
    
    
});