# IS-24 Coding Challenge for ECC
## Requirements
* Node
* NPM

## How to Run
1. Assuming you are at the root of the project directory, go to the `backend` directory in one terminal.
```
cd backend
```

2. Once you are in the `backend` directory, run the following commands:
```
npm install
npm run start
```

3. In **another terminal**, go to the `frontend` directory of the project.
```
cd frontend
```

4. Once you are in the `frontend` directory, un the following commands:
```
npm install
npm run build
npm run serve 
```

In the terminal, it should specify the local address. If not, it is most likely http://localhost:3001.

If you want to make changes to the frontend application and see these changes locally immediately, then you may run `npm run start:dev` instead of `npm run serve`. Otherwise, you have run `npm run build`

## Swagger Docs
After running the backend, visit: http://localhost:3000/api-docs/

## Assumptions
* Lisa can only add the following product information:
    * Product Name
    * Product Owner Name
    * Developer(s)
    * Scrum Master Name
    * Start Date
    * Methodology
* Alan can either add or edit the following product information:
    * Product Name
    * Product Owner Name
    * Developer(s)
    * Scrum Master Name
    * Methodology
    * Location

## Technologies
* React
    * React Bootstrap V5
    * React Hook Form
* Node
* Express