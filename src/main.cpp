/*
 * This file is part of PoolViewer
 * Copyright (c) 2011 Ivor Hewitt
 *
 * PoolViewer is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * PoolViewer is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with PoolViewer.  If not, see <http://www.gnu.org/licenses/>.
 */
#include <QApplication>
#include <QSettings>
#include <QTranslator>
#include <QLibraryInfo>

#include "summaryimpl.h"
#include "datastore.h"

#include <stdio.h>


int main(int argc, char ** argv)
{
    QString locale = QLocale::system().name();
//     printf("locale:%s\n",locale.toLocal8Bit().data());

    QSettings settings("Swim","Poolmate");

    // Do we have a datafile?
    //    settings.setValue("test", 1);
    QString path = settings.value("dataFile").toString();
    if (path.isEmpty())
    {
        QString username = qgetenv("USER").constData();
        QString home = qgetenv("HOME").constData();
        path = QString("%1/poolmate-%2.csv").arg(home).arg(username);
        settings.setValue("dataFile", path);
    }

    DataStore *d = new DataStore();
    d->setFile(path);
    d->load();

    QApplication app( argc, argv );
 
    QTranslator qtTranslator;
    qtTranslator.load("qt_" + locale,
            QLibraryInfo::location(QLibraryInfo::TranslationsPath));
    app.installTranslator(&qtTranslator);
    
    QTranslator translator;
    translator.load(QString("poolviewer_") + locale);
    app.installTranslator(&translator);

    SummaryImpl win;
    win.setDataStore( d );

    //TODO tidy this!, for now refill grid and data from datastore.
    win.fillWorkouts(d->Workouts());
 
    win.show();
    app.connect( &app, SIGNAL( lastWindowClosed() ), &app, SLOT( quit() ) );

    return app.exec();
}
