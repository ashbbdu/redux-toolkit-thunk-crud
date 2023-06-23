import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const create = createAsyncThunk("create" , async (payload , {dispatch}) => {
    try {
        const response = await fetch("https://64920a4a2f2c7ee6c2c9559f.mockapi.io/crud" , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify(payload)
        })
        const data = await response.json()
        if(response.status === 201){
            dispatch(read())
        }
        return data;
        
    }
    catch (e) {
        console.log(e)
    }
})

export const deleteUser = createAsyncThunk("delete" , async (id) => {
    try {
        const response = await fetch(`https://64920a4a2f2c7ee6c2c9559f.mockapi.io/crud/${id}` , {
           
              method: "DELETE"
        })
        const data = response.json()
        return data;
    }
    catch (e) {
        console.log(e)
    }
})

export const read  = createAsyncThunk("read" , async () => {
    try {
        const response = await fetch("https://64920a4a2f2c7ee6c2c9559f.mockapi.io/crud")
        const data = await response.json()
        return data;
    }
    catch (e) {
        console.log(e)
    }
})

export const readById  = createAsyncThunk("readById" , async (id) => {
    try {
        const response = await fetch(`https://64920a4a2f2c7ee6c2c9559f.mockapi.io/crud/${id}`)
        const data = await response.json()
        return data;
    }
    catch (e) {
        console.log(e)
    }
})


export const update = createAsyncThunk("create" , async (respData,{dispatch}) => {
    const {formData , id} = respData
    try {
        const response = await fetch(`https://64920a4a2f2c7ee6c2c9559f.mockapi.io/crud/${id }` , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "PUT",
              body: JSON.stringify(formData)
        })
        const data = await response.json()
        if(response.status === 200){
            dispatch(read())
        }
        return data;
    }
    catch (e) {
        console.log(e)
    }
})




const userDetail = createSlice({
    name : "userDetails",
    initialState : {
        users : [] ,
        userDetail : {},
        value : 0,
        loading : false
    },
    reducers : {
        increment : (state) => {
            state.value = state.value + 1
        }
    },

    extraReducers : {
        [create.pending] : (state) => {
            state.loading = true
        },
        [create.fulfilled] : (state , action) => {
            state.loading = false
            state.users.push(action.payload)
        },
        [read.pending] : (state) => {
            state.loading = true
        },
        [read.fulfilled] : (state , action) => {
            state.loading = false
            state.users = action.payload
        },
        [deleteUser.pending] : (state) => {
            state.loading = true
        },
        [deleteUser.fulfilled] : (state , action) => {
            state.loading = false
            state.users = state.users.filter(res => res.id !== action.payload.id)
           
        },
        [readById.pending] : (state) => {
            state.loading = true
        },
        [readById.fulfilled] : (state , action) => {
            state.loading = false
            state.userDetail = action.payload
            // state.users = state.users.filter(res => res.id === action.payload.id)
           
        },
        [update.pending] : (state) => {
            state.loading = true
        },
        [update.fulfilled] : (state , action) => {
            state.loading = false
        //    console.log(JSON.parse(JSON.stringify(state.users.filter(res => res.id === action.payload.id))) ,"ashish") 
            // state.users = state.users.filter(res => res.id === action.payload.id)
            // state.users = action.payload
           
        }
    }


})

export const { increment } = userDetail.actions;
export default userDetail.reducer;