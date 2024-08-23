public with sharing class TestingClass {
    public static void testAccount (){
        String accname;
        accname = 'testing';
        Account acc = new Account(name= accname);
        insert acc;
    }
}