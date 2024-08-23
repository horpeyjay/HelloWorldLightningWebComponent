public with sharing class TestingClass {
    public static void testAccount{
        string name = 'testing';
        Account acc = new Account(name=name);
        insert acc;
        System.debug('Test');
        System.debug('Test');
        System.debug('Test');
    }
}