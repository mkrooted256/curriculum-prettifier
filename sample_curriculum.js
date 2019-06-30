const sample_params = {
    dictionary: {
        term: "Семестр",
        subject_types: {
            1: "Неперервна математика",
            2: "Загальна алгебра та Дискретна математика",
            3: "Програмування",
            4: "Фізика",
            5: "Теорія імовірностей",
            6: "Прикладна математика",
            7: "Математичне моделювання",
            8: "IT",
            9: "Інші предмети",
            10: "Позакредитні предмети"
        }
    },
    title_max_len: 22,
    legend_caption_max_len: 25
};
const sample_curriculum = [
    {
        "subjects": [
            {
                "title": "Мат. Аналіз",
                "type": 1,
                "credits": 5
            },
            {
                "title": "Алгебра та геометрія",
                "type": 2,
                "credits": 4,
                "group": 1
            },
            {
                "title": "Дискретна математика",
                "type": 2,
                "credits": 7,
                "group": 1
            },
            {
                "title": "Програмування 1",
                "subtitle": "Структурний підхід",
                "type": 3,
                "credits": 4
            },
            {
                "title": "Українська мова",
                "type": 8,
                "credits": 2
            },
            {
                "title": "Англійська мова",
                "type": 7,
                "credits": 2
            },
            {
                "title": "Програмне забезпечення обчислювальних систем",
                "type": 5,
                "credits": 3
            }
        ],
        "total_credits": 27
    }, {
        "subjects": [
            {
                "title": "Мат. Аналіз",
                "type": 1,
                "credits": 5
            },
            {
                "title": "Алгебра та геометрія",
                "type": 2,
                "credits": 4
            },
            {
                "title": "Дискретна математика",
                "type": 2,
                "credits": 7
            },
            {
                "title": "Програмування 1",
                "subtitle": "Структурний підхід",
                "type": 3,
                "credits": 4
            },
            {
                "title": "Англійська мова",
                "type": 7,
                "credits": 2
            },
            {
                "title": "Програмне забезпечення обчислювальних систем",
                "type": 5,
                "credits": 3
            }
        ],
        "total_credits": 27
    }, {
        "subjects": [
            {
                "title": "Мат. Аналіз",
                "type": 1,
                "credits": 5
            },
            {
                "title": "Алгебра та геометрія",
                "type": 2,
                "credits": 4
            },
            {
                "title": "Дискретна математика",
                "type": 2,
                "credits": 7
            },
            {
                "title": "Програмування 1",
                "subtitle": "Структурний підхід",
                "type": 3,
                "credits": 4
            },
            {
                "title": "Українська мова",
                "type": 8,
                "credits": 2
            },
            {
                "title": "Англійська мова",
                "type": 7,
                "credits": 2
            }
        ],
        "total_credits": 27
    }, {
        "subjects": [
            {
                "title": "Мат. Аналіз",
                "type": 1,
                "credits": 5
            },
            {
                "title": "Алгебра та геометрія",
                "type": 2,
                "credits": 4,
                "group": 1
            },
            {
                "title": "Дискретна математика",
                "type": 2,
                "credits": 7,
                "group": 1
            },
            {
                "title": "Програмування 1",
                "subtitle": "Структурний підхід",
                "type": 3,
                "credits": 4
            },
            {
                "title": "Українська мова",
                "type": 8,
                "credits": 2
            },
            {
                "title": "Англійська мова",
                "type": 7,
                "credits": 2
            },
            {
                "title": "Програмне забезпечення обчислювальних систем",
                "type": 5,
                "credits": 3
            }
        ],
        "total_credits": 27
    }, {
        "subjects": [
            {
                "title": "Алгебра та геометрія",
                "type": 2,
                "credits": 4
            },
            {
                "title": "Дискретна математика",
                "type": 2,
                "credits": 7
            },
            {
                "title": "Програмування 1",
                "subtitle": "Структурний підхід",
                "type": 3,
                "credits": 4
            },
            {
                "title": "Українська мова",
                "type": 8,
                "credits": 2
            },
            {
                "title": "Англійська мова",
                "type": 7,
                "credits": 2
            },
            {
                "title": "Англійська мова",
                "type": 7,
                "credits": 2
            }
        ],
        "total_credits": 27
    }, {
        "subjects": [
            {
                "title": "Мат. Аналіз",
                "type": 1,
                "credits": 5
            },
            {
                "title": "Алгебра та геометрія",
                "type": 2,
                "credits": 4
            },
            {
                "title": "Дискретна математика",
                "type": 2,
                "credits": 7
            },
            {
                "title": "Програмування 1",
                "subtitle": "Структурний підхід",
                "type": 3,
                "credits": 4
            },
            {
                "title": "Українська мова",
                "type": 8,
                "credits": 2
            },
            {
                "title": "Англійська мова",
                "type": 7,
                "credits": 2
            },
            {
                "title": "Програмне забезпечення обчислювальних систем",
                "type": 5,
                "credits": 3
            }
        ],
        "total_credits": 27
    }, {
        "subjects": [
            {
                "title": "Мат. Аналіз",
                "type": 1,
                "credits": 5
            },
            {
                "title": "Алгебра та геометрія",
                "type": 2,
                "credits": 4
            },
            {
                "title": "Дискретна математика",
                "type": 2,
                "credits": 7
            },
            {
                "title": "Англійська мова",
                "type": 7,
                "credits": 2
            },
            {
                "title": "Програмне забезпечення обчислювальних систем",
                "type": 5,
                "credits": 3
            }
        ],
        "total_credits": 27
    }, {
        "subjects": [
            {
                "title": "Мат. Аналіз",
                "type": 1,
                "credits": 5
            },
            {
                "title": "Алгебра та геометрія",
                "type": 2,
                "credits": 4
            },
            {
                "title": "Дискретна математика",
                "type": 2,
                "credits": 7
            },
            {
                "title": "Програмування 1",
                "subtitle": "Структурний підхід",
                "type": 3,
                "credits": 4
            },
            {
                "title": "Українська мова",
                "type": 8,
                "credits": 2
            },
            {
                "title": "Англійська мова",
                "type": 7,
                "credits": 2
            }
        ],
        "total_credits": 27
    }
];