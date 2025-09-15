from django.shortcuts import render, redirect

from data.models import Test, TestResult


def login(request):

    test_pk = request.GET.get('testPk')

    test = Test.objects.get(pk=test_pk)

    return render(request, 'login.html', {
        'test': test
    })


def cross(request):

    test_pk = request.GET.get('testPk')
    student_firstname = request.GET.get('studentFirstname')
    student_lastname = request.GET.get('studentLastname')
    student_class = request.GET.get('studentClass')
    student_character = request.GET.get('studentCharacter')

    test = Test.objects.get(pk=test_pk)
    
    exist = TestResult.objects.filter(test=test, student_firstname=student_firstname, student_lastname=student_lastname, student_class=student_class).exists()

    if not exist:
        return redirect(f'/?testPk={test_pk}&studentFirstname={student_firstname}&studentLastname={student_lastname}&studentClass={student_class}&studentCharacter={student_character}')
    else:
        return redirect(f'/result?testPk={test_pk}&studentFirstname={student_firstname}&studentLastname={student_lastname}&studentClass={student_class}&studentCharacter={student_character}')


def result(request):

    test_pk = request.GET.get('testPk')
    student_firstname = request.GET.get('studentFirstname')
    student_lastname = request.GET.get('studentLastname')
    student_class = request.GET.get('studentClass')
    student_character = request.GET.get('studentCharacter')

    test = Test.objects.get(pk=test_pk)

    test_results = TestResult.objects.filter(test=test).order_by('-points')

    test_result = test_results.filter(student_firstname=student_firstname, student_lastname=student_lastname, student_class=student_class).last()

    half_tasks_quantity = len(test.tasks) / 2

    return render(request, 'result.html', {
        'test_result': test_result,
        'test_results': test_results,
        'half_tasks_quantity': half_tasks_quantity,
        'test': test,
        'student_character': student_character
    })
