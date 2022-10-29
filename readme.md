# Start project 
1) cd project folder
2) npm install (You need to wait some time for installing all packages, don't panic if it takes more than 1 minute)
3) create settings js:
--------------------------------------
let token = "Your-token";
export {token}
--------------------------------------
(how to create token describes here https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

--------------------------------------
4) npm run build\start for PROD \ DEV
5) use it and get pleasure!)

### Used libraries
- js
  - react    
    - react-dom 

  - react-router 
    - router-dom
    
  - axios
  - zustand

- css
  - tailwind
  - css-loader     
  - mini-css-extract-plugin     
  - postcss-loader  
  - tailwindcss-hyphens
  