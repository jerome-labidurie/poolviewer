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

#include <QSettings>

#include "configimpl.h"

ConfigImpl::ConfigImpl( QWidget * parent, Qt::WindowFlags f) 
    : QDialog(parent, f)
{
    setupUi(this);

    QSettings settings("Swim","Poolmate");
    QString path = settings.value("dataFile").toString();
    int pod = settings.value("podType").toInt(); //use int in case we need to add another

    if (pod == 0) // 0 - original 1 - type A
    {
        podOriginal->setChecked(true);
    }
    else
    {
        podTypeA->setChecked(true);
    }

    dataFile->setText(path);

}


void ConfigImpl::on_buttonBox_accepted()
{
    QSettings settings("Swim","Poolmate");

    int podsetting;
    if (podOriginal->isChecked())
    {
        podsetting = 0;
    }
    else
    {
        podsetting = 1;
    }

    int pod = settings.value("podType").toInt(); //use int in case we need to add another
    if (podsetting != pod)
    {
        settings.setValue("podType", podsetting);
    }

    QString path = settings.value("dataFile").toString();
    if ( path.compare(dataFile->text() ) != 0)
    {
        settings.setValue("dataFile", dataFile->text());
    }
}
