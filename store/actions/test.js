export const SET_TEST = 'SET_TEST';

export const fetchTest = () => {
    return async dispatch => {
        fetch('http://dummy.restapiexample.com/api/v1/employee/1',{
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
            }).then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: SET_TEST, test: json.data.employee_name
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
};

export const setTest = (test) => {
    return { type: SET_TEST, test: test };
};