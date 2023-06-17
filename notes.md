# Notes

## Cart Functionality

- Stored in a combo of context-Api & localStorage (Totally Client-side).
    - If new user logged in delete the old ones.
    - the username value of cart is dependent on the auth context.

- restrict users to buy only certain amount of products at a time. if more than the restricted amount is passed show a info-message that the limit is reached.
    - implement the restriction in cart, product-page & context.

- Implement `reapop` to notify users of successfull cart Additions.

- Add a info showing how many in cart with the limit like `1/3`.
- Max Product Limit is 6.

- Buy Now button text is subjected to change if the max-limit is reached the text will turn into View Cart button.
-  On clicking Buy Now button add the current item to the cart. then take the user to the cart page.
- On clicking View Cart button just take the user straight to cart page

### Implementation Tracker
- [x] Implement cart-context Logic.
- [x] Implement Login Notification to unauthed users.
- [x] Implement Success Notification.
- [x] Implement Add-to-cart button's logic.
- [x] Implement limit info near add-to-cart btn.

- [x] update cart-menu-icon to show no-of-items in the cart `add the total quantity`.
- [x] Implement Restrictions in Add To Cart BTN

- [x] Implement Carts Page.
- [x] Implement Restrictions in In-Cart-Page BTNS
- [x] Implement `Buy Now / View Cart` logic.
- [x] Implement Order Context
- [x] On Clicking Checkout Create a order.
- [x] Create a loading component for `ViewProduct` `Use OPACITY for animation`
- [x] Build Loading & UnAuthenticated sections for AuthOnly section.

## Next
- Try to replace login/logout/refresh api's with server-actions.
- On successfull login notify users with reapop.
- on login-error notify users with reapop instead of error message in the form.
- On logout notify users with logout message.


## Plan
----
- [ ] Design Login / Logout, My Orders > Order, Cart, My Subscriptions > Subscription, Account Pages...
- [ ] Implement the whole app's functionality.
----
- [ ] Update name of folders which do not contain pages or routes to _folder-name
----
- [ ] Label Z-INDEX as sass_variable 
- [ ] Think about font-sizes
- [ ] In BestSellers section in HomePage make the cards Server-side by passing Card Components as props to ItemsCarousel Component
- [ ] Make Design Corrections in homePage & Redesign the Journey-Section & Fill the plain backgrounds with some curves or waves or blobs.
- [ ] Use Grid on Products Page
- [ ] Add `loading` & `error` files to each pages.
----
- [ ] Make Design Responsive both Higher & Lower screen sizes `{2560px - 320px}`.
- [ ] Add appropriate animations to make site look cool.
- [ ] Configure Robots file
- [ ] Work on SEO
- [ ] Build a OneTime Popup that will show that this is a mockup
----
- [ ] Work on Image `Width-Height change maintain aspect ratio` warning. I think the following [link](https://stackoverflow.com/questions/69230343/nextjs-image-component-with-fixed-witdth-and-auto-height) might help. or the `loader` thing will
----
- [ ] Test the webapp's working...
- [ ] Deploy it to netlify under https://spicy-brew.danithedev.tech