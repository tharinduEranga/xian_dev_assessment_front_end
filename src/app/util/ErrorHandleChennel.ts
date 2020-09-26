import {ErrorHandler} from '@angular/core';
import Swal from 'sweetalert2';

export class ErrorHandleChennel implements ErrorHandler {
    handleError(error: any): void {
        console.log(error);
        if (error.status === 417) {
            Swal.fire('Failed', error.error.message, 'error');
        } else {
            Swal.fire('Oops', 'Something went wrong!', 'error');
        }
    }
}
