const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center h-screen ">{children}</div>
  );
};

export default AuthLayout;

{
  /* <div className="bg-white dark:bg-black border p-8 rounded-sm shadow-lg">
      <h3 className="text-xl font-semibold text-black dark:text-white">
        Sign in to your account
      </h3>
      <p className="text-muted-foreground text-sm">Enter your information</p>
      <Separator className="my-4" />
      
    </div> */
}
